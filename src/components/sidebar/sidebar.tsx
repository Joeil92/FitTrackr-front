import { dashboardIcon, workoutsIcon } from "../../shared/utils/icon"

export default function Sidebar() {

    const routes = [
        { label: "Tableau de bord", link: "/", icon: dashboardIcon },
        { label: "Mes programmes", link: "/workouts", icon: workoutsIcon }
    ]

    return (
        <div className="absolute py-3 h-full w-[10%] bg-white border-r">
            <div className="text-center mb-12">
                <h3 className="font-medium text-xl">FitTrackr</h3>
            </div>
            <ul className="px-3">
                {routes.map(route => (
                    <li className="mb-6 text-xs font-medium text-gray-500 hover:text-gray-600 transition-all">
                        <a href={route.link} className="flex justify-start items-center gap-3">{route.icon} {route.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}