const { Role } = require('../models');

const getAllRoles = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRoleById = async (req, res) => {
    try {
        const role = await Role.findByPk(req.params.id);
        if (role) {
            res.json(role);
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createRole = async (req, res) => {
    try {
        console.log(req.body);
        const role = await Role.create(req.body);
        res.status(201).json(role);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateRole = async (req, res) => {
    try {
        const [updated] = await Role.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedRole = await Role.findByPk(req.params.id);
            res.status(200).json(updatedRole);
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteRole = async (req, res) => {
    try {
        const deleted = await Role.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(200).json({ message: 'ROLE.DELETED' });
        } else {
            res.status(422).json({ message: 'GENERAL.NOT_FOUND' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
};
