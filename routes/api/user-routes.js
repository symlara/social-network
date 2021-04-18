const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controllers/user-controller');

// /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser)

// /api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)


//  /api/users/:id/friends/:friendId

router
  .route('/:id/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;

