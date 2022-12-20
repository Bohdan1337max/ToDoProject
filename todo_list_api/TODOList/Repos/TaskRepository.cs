namespace TODOList.Repos;

public class TaskRepository : ITaskRepository
{
    private readonly List<Task> _tasks = new List<Task>();
    private int Id;

    public IEnumerable<Task> GetTasks()
    {
        return _tasks;
    }

    public Task AddTask(string name)
    {
        Task task = new Task()
        {
            Id = Id + 1,
            Completed = false,
            Name = name
        };
        Id++;
        _tasks.Add(task);
        return task;
    }

    public void DeleteTask(int id)
    {
        for (var i = 0; i < _tasks.Count; i++)
        {
            var task = _tasks[i];
            if (task.Id == id)
            {
                _tasks.Remove(task);
                return;
            }
        }
    }

    public (bool, Task) UpdateTask(Task task)
    {
        var isUpdated = false;
        var taskToUpdate = _tasks.FirstOrDefault(t => t.Id == task.Id);
        if (taskToUpdate == null)
            return (isUpdated, taskToUpdate);
        isUpdated = true;
        taskToUpdate.Name = task.Name;
        taskToUpdate.Completed = task.Completed;
        return (isUpdated, taskToUpdate);
    }
    
}