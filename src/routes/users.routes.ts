import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { listAllUsersController } from "../modules/users/useCases/listAllUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../modules/users/useCases/turnUserAdmin";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  try {
    createUserController.handle(request, response);
  } catch (error) {
    return response.status(400).json({ error: error.toString() });
  }
});

usersRoutes.patch("/:user_id/admin", (request, response) => {
  try {
    turnUserAdminController.handle(request, response);
  } catch (error) {
    return response.status(404).json({ error: error.toString() });
  }
});

usersRoutes.get("/:user_id", (request, response) => {
  try {
    showUserProfileController.handle(request, response);
  } catch (error) {
    return response.status(404).json({ error: error.toString() });
  }
});

usersRoutes.get("/", (request, response) => {
  try {
    listAllUsersController.handle(request, response);
  } catch (error) {
    return response.status(400).json({ error: error.toString() });
  }
});

export { usersRoutes };
