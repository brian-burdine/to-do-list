export function getTasksFromStorage (key) {
    const savedTasks = localStorage.getItem(key);
    return savedTasks && savedTasks.length > 0 ? JSON.parse(savedTasks) : [];
}

export function addTasksToStorage (key, tasks) {
    localStorage.setItem(key, JSON.stringify(tasks));
}