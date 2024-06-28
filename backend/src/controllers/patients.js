const PatientModel = require('../model/patients')
const createHttpError = require('http-errors')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getUserData = async (req, res, next) => {
    try {
      // req.user.user_id should contain the user's ID extracted from the token by the middleware
      const userId = req.user.user_id;
  
      const user = await PatientModel.findById(userId);
  
      if (!user) {
        throw createHttpError(404, 'User not found');
      }
  
      const userData = {
        id: user._id,
        username: user.username,
        email: user.email,
        userType: "patient",
      };
  
      res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  };

  exports.deleteAccount = async (req, res, next) => {
    const userId = req.user.user_id; // Assuming you have a user ID in the request, like from a JWT token
  
    try {
      const user = await PatientModel.findById(userId);
  
      if (!user) {
        throw createHttpError(404, 'User not found');
      }
  
      // You might want to add some additional checks here, e.g., asking for confirmation
  
      // Delete the user account
      await PatientModel.deleteOne({ _id: userId });
  
      res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
  
  

exports.login = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    try {
        if (!username || !password) {
            throw createHttpError(400, 'Missing required parameters')
        }

        const user = await PatientModel.findOne({ username: username }).exec();

        if (!user) {
            throw createHttpError(400, 'User does not exist')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw createHttpError(400, 'Invalid credentials')
        }


        const token = jwt.sign(
            {
                user_id: user._id,
                username: user.usernmae,
            },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: "4h",
            }
        )

        user.token = token;

        const result = await user.save();


        const response = {
            id: result._id,
            username: result.username,
            email: result.email,
            token: result.token,
            userType: "patient"
        }


        console.log(response);

        res.status(200).send(response);

    } catch (error) {
        next(error)
    }
}


exports.updateUser = async (req, res, next) => {
    console.log('Received a PUT request to /api/v1/user/update');
    const userId = req.user.user_id; // Assuming you have a user ID in the request, like from a JWT token
    const newData = req.body;
  
    try {
      const user = await PatientModel.findById(userId);
  
      if (!user) {
        throw createHttpError(400, 'User not found');
      }
  
      // Update user data with the new information
      if (newData.username) user.username = newData.username;
      if (newData.email) user.email = newData.email;
      if (newData.telephone) user.telephone = newData.telephone;
      if (newData.username) user.username = newData.username;
      if (newData.password) {
        const hashedPassword = await bcrypt.hash(newData.password, 10);
        user.password = hashedPassword;
      }
  
      const result = await user.save();
  
      // Respond with the updated user data or a success message
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };

exports.register = async (req, res, next) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    try {
        if (!username || !email || !password) {
            throw createHttpError(400, 'Missing required parameters')
        }

        const isUserAvailable = await PatientModel.findOne({ username: username }).exec();

        if (isUserAvailable) {
            throw createHttpError(400, 'User already exists')
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new PatientModel({
            username: username,
            email: email,
            password: hashedPassword
        })

        const result = await user.save();

        res.status(201).send(result);


    } catch (error) {
        next(error)

    }


}

