using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace ChatApp.API.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(Models.Message message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
}
