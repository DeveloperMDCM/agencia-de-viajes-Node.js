import express from "express";
import { paginaDetalleViaje, 
        paginaInicio,
        paginaNosotros,
        paginaTestimoniales,
        paginaViajes
     } from "../controllers/paginasController.js";
import { guardatTestimonial } from "../controllers/testimonialController.js";
const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardatTestimonial)


export default router;