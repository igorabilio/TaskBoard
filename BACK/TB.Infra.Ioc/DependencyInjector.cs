using TB.Aplication.Interfaces;
using TB.Aplication.Services;
using TB.Domain.Interfaces.Repositories;
using TB.Domain.Interfaces.Services;
using TB.Domain.Services;
using Microsoft.Extensions.DependencyInjection;
using TB.Infra.Data.Repositories;

namespace TB.Infra.Ioc
{
    public class DependencyInjector
    {
        public static void Register(IServiceCollection svcCollection)
        {
            //application
            svcCollection.AddScoped(typeof(IBaseApp<,>), typeof(BaseServiceApp<,>));
            svcCollection.AddScoped<IUserApp, UserApp>();
            svcCollection.AddScoped<IProjectApp, ProjectApp>();

            //Domain
            svcCollection.AddScoped(typeof(IBaseService<>), typeof(BaseService<>));
            svcCollection.AddScoped<IUserService, UserService>();
            svcCollection.AddScoped<IProjectService, ProjectService>();

            //Repository
            svcCollection.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));
            svcCollection.AddScoped<IUserRepository, UserRepository>();
            svcCollection.AddScoped<IProjectRepository, ProjectRepository>();
            
        }
    }
}
