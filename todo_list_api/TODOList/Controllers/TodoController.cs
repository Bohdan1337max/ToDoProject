using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TODOList.Repos;

namespace TODOList.Controllers;

[ApiController]
[Route("TODOList")]
public class TodoController : ControllerBase
{
    private readonly ITaskRepository _taskRepository;
    
    public TodoController(ITaskRepository taskRepository)
    {
        _taskRepository = taskRepository;
    }

    [HttpGet]
    public IEnumerable<Task> GetTasks()
    {
        return _taskRepository.GetTasks();
    }

    
    [HttpPost]
    public Task AddTasks(string name)
    {
        return _taskRepository.AddTask(name);
    }

    [HttpDelete]
    public void DeleteTask(int id)
    {
        _taskRepository.DeleteTask(id);
    }

    [HttpPut]
    public IActionResult UpdateTask(Task task)
    {
        var (isUpdated, task1) = _taskRepository.UpdateTask(task);
        if (!isUpdated)
            return NotFound();
        return Ok(task1);
    }
}