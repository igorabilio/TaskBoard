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
            svcCollection.AddScoped<IProjectApp, ProjectApp>();
            svcCollection.AddScoped<IUserApp, UserApp>();

            //Domain
            svcCollection.AddScoped(typeof(IBaseService<>), typeof(BaseService<>));
            svcCollection.AddScoped<IProjectService, ProjectService>();
            svcCollection.AddScoped<IUserService, UserService>();

            //Repository
            svcCollection.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));
            svcCollection.AddScoped<IProjectRepository, ProjectRepository>();
            svcCollection.AddScoped<IUserRepository, UserRepository>();
        }
    }
}
