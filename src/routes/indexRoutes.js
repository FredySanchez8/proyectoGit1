import { Router } from "express"
import { createCelulares, deleteCelulares, renderCelulares, renderEditCelulares, statusCelulares, updateCelulares } from "../controllers/celularController";


const router = Router();

//CELULARES
router.get('/', renderCelulares);

//Agregar
router.post("/celulares/agregar",  createCelulares);

//A buscar por id
router.get("/celulares/:id/update", renderEditCelulares);

//Actualizar
router.post("/celulares/:id/update", updateCelulares);

//Eliminar
router.get("/celulares/:id/delete", deleteCelulares);

//Función para status
router.get("/celulares/:id/statusCelulares", statusCelulares);

export default router;




