import HomePageConfig from "../main/home/HomePageConfig";
import Error404PageConfig from "../main/errors/Error404PageConfig"; // Ensure this path is correct

const routes = [...HomePageConfig.routes, ...Error404PageConfig.routes];

export default routes;
