import viewRouterList from "../router";
import { getRouterView } from "../utils/router";
const View = (): JSX.Element => getRouterView(viewRouterList);
export default View;
