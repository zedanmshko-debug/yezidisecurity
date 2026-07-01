import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route("/", "routes/home.tsx"),
    route("/contact", "routes/contact.tsx"),
    route("/overOns", "routes/overOns.tsx"),
    route("/werkenBij", "routes/werkenBij.tsx"),
    route("/vacatureBeveiliger", "routes/vacatureBeveiliger.tsx"),

    // Diensten routes
    route("/diensten", "routes/diensten._index.tsx"),
    route("/diensten/objectbeveiliging", "routes/diensten.objectbeveiliging._index.tsx"),
    route("/diensten/evenementenbeveiliging", "routes/diensten.evenementenbeveiliging._index.tsx"),
    route("/diensten/transportbeveiliging", "routes/diensten.transportbeveiliging._index.tsx"),
    route("/diensten/zorgbeveiliging", "routes/diensten.zorgbeveiliging._index.tsx"),
    route("/diensten/schoolbeveiliging", "routes/diensten.schoolbeveiliging._index.tsx"),
    route("/diensten/bouwbeveiliging", "routes/diensten.bouwbeveiliging._index.tsx"),
    route("/diensten/logistiek", "routes/diensten._logistiek._index.tsx"),
    route("/diensten/winkelsurveillance", "routes/diensten.winkelsurveillance._index.tsx"),
    route("/diensten/mobilesurveillance", "routes/diensten.mobilesurveillance._index.tsx"),
    route("/diensten/toezichtservice", "routes/diensten.toezichtservice._index.tsx"),
    route("/diensten/opvangbeveiliging", "routes/diensten.opvangbeveiliging._index.tsx"),

] satisfies RouteConfig;
