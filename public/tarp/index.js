import TarpNavigator from "./TarpNavigator.js";
import CourseNavigator from "./CourseNavigator.js";
import Sidebar from "./Sidebar.js";
import Modules from "./Modules.js";

const tarpElement = $('#tarp')
tarpElement.append(`
    <div class="container-fluid">
        <a href="../index.html">Back</a>

        <h1>Welcome to Tarp!!!</h1>
        <div class="row">
            <div class="d-none d-md-block col-md-2 col-xl-2 col-xxl-2">
                ${TarpNavigator()}
            </div>
            <div class="d-none d-md-block col-md-2 col-xl-2 col-xxl-2">
                ${CourseNavigator('Home')}
            </div>
            <div class="col-md-8 col-xl-7 col-xxl-7">
                ${Modules()}
            </div>
            <div class="d-none d-xl-block col-xl-1 col-xxl-1">
                ${Sidebar()}
            </div>
        </div>
    </div>
`)