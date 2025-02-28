import { type RouteConfig, layout, route, index } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),

  route("/login", "./routes/login.tsx"),
] satisfies RouteConfig;
