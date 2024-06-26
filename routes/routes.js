const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const rolesController = require('../controllers/rolesController');

// Define routes
router.get('/users', usersController.getAllUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUser);
router.patch('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

router.get('/roles', rolesController.getAllRoles);
router.get('/roles/:id', rolesController.getRoleById);
router.post('/roles', rolesController.createRole);
router.patch('/roles/:id', rolesController.updateRole);
router.delete('/roles/:id', rolesController.deleteRole);

module.exports = router;
