"use client";
import * as React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
    ChevronsLeft,
    ChevronDown,
    Plus,
    FileText,
} from "lucide-react";
import {UserButton} from "@clerk/clerk-react";

const workspaces = [
    { id: 1, name: "Trigonometric Functions", icon: FileText },
    { id: 2, name: "Rigid body motion", icon: FileText },
    { id: 3, name: "Homogeneous Equations", icon: FileText },
    { id: 4, name: "Collisions of two spheres", icon: FileText },
    { id: 5, name: "Japanese Culture", icon: FileText },
];


interface SidebarProps {
    notes: { id: string; title: string; text: string }[];
    onNoteClick: (note: { id: string; title: string; text: string }) => void;

}

const Sidebar: React.FC<SidebarProps> = ({notes,onNoteClick}) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const [activeWorkspace, setActiveWorkspace] = React.useState(workspaces[0]);

    const [isWorkspacesOpen, setIsWorkspacesOpen] = React.useState(false);
    const [isCoursespacesOpen, setIsCoursespacesOpen] = React.useState(false);
    return (
        <div
            className={`d-flex flex-column flex-shrink-0 p-3 mb-3 bg-dark text-light shadow-lg rounded h ${
                isCollapsed ? "sidebar-collapsed" : "sidebar-expanded"
            }`}
            style={{ height: "100vh", width: isCollapsed ? "4.5rem" : "280px" }}
        >
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
                {!isCollapsed && (
                    <div className="d-flex flex-row">
                    <button className="btn btn-link text-decoration-none p-0 me-2">
                        <UserButton />
                    </button>
                    <h4>Sphera Notes</h4>
                    </div>
                )}
                <button
                    className="btn btn-link ms-auto p-0"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    <ChevronsLeft
                        className={`bi ${isCollapsed ? "rotate-180" : ""}`}
                        width={24}
                        height={24}
                    />
                </button>
            </div>
            <hr />

            {/* Workspace */}

            <div className="mb-3">
                <button
                    className="btn btn-toggle d-flex align-items-center rounded w-100 justify-content-between text-light"
                    onClick={() => setIsWorkspacesOpen(!isWorkspacesOpen)}
                >
          <span className="d-flex align-items-center">
            <ChevronDown
                className={`bi me-2 ${isWorkspacesOpen ? "rotate-180" : ""}`}
                width={16}
                height={16}
            />
              {!isCollapsed && "Courses"}
          </span>
                    {!isCollapsed && <Plus className="bi" width={16} height={16} />}
                </button>

                <div className={`collapse ${isWorkspacesOpen ? "show" : ""}`}>
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small text-light">
                        {workspaces.map((workspace) => (
                            <li key={workspace.id}>
                                <button
                                    className={`btn d-flex align-items-center rounded w-100 text-white ${
                                        activeWorkspace.id === workspace.id ? "btn-outline-secondary" : ""
                                    }`}
                                    onClick={() => setActiveWorkspace(workspace)}
                                >
                                    <workspace.icon className="bi me-2" width={16} height={16} />
                                    {!isCollapsed && workspace.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr />

            <div className="mb-3">
                <button
                    className="btn btn-toggle d-flex align-items-center rounded w-100 justify-content-between text-light"
                    onClick={() => setIsCoursespacesOpen(!isCoursespacesOpen)}
                >
          <span className="d-flex align-items-center">
            <ChevronDown
                className={`bi me-2 ${isCoursespacesOpen ? "rotate-180" : ""}`}
                width={16}
                height={16}
            />
              {!isCollapsed && "Notes"}
          </span>
                    {!isCollapsed && <Plus className="bi" width={16} height={16} />}
                </button>

                <div className={`collapse ${isCoursespacesOpen ? "show" : ""}`}>
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        {notes.map((note) => (
                            <li key={note.id}>
                                <button
                                    className={`btn d-flex align-items-center rounded w-100 btn-outline-dark mb-2 text-light`}
                                    onClick={() => onNoteClick(note)}
                                >
                                    {!isCollapsed && note.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    );
}
export default Sidebar;