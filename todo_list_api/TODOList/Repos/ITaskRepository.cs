namespace TODOList.Repos;

public interface ITaskRepository
{
    IEnumerable<Task> GetTasks();
    Task AddTask(string name);
    void DeleteTask(int id);
    (bool, Task) UpdateTask(Task task);
}