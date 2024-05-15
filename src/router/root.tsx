import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Root from "../pages/root/root";
import Dashboard from "../pages/dashboard/dashboard";
import Workouts from "../pages/workouts/workouts";
import protectedLoader from "./loaders/protectedLoader";
import NewWorkout from "../pages/workouts/pages/newWorkout/newWorkout";
import Workout from "../pages/workouts/pages/workout/workout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: protectedLoader,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/workouts',
                children: [
                    {
                        path: '/workouts',
                        element: <Workouts />
                    },
                    {
                        path: 'new_workout',
                        element: <NewWorkout />
                    },
                    {
                        path: ':workoutId',
                        element: <Workout />
                    }
                ]
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default router;