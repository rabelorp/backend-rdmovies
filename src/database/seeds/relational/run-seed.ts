import { NestFactory } from '@nestjs/core';
import { RoleSeedService } from './role/role-seed.service';
import { SeedModule } from './seed.module';
import { StatusSeedService } from './status/status-seed.service';
import { UserSeedService } from './user/user-seed.service';
// import { MoviesSeedService } from './movies/movies-seed.service';
// import { RatingsSeedService } from './ratings/ratings-seed.service';
// import { CategorySeedService } from './category/category-seed.service';
const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  // run
  await app.get(RoleSeedService).run();
  await app.get(StatusSeedService).run();
  await app.get(UserSeedService).run();
  // await app.get(MoviesSeedService).run();
  // await app.get(RatingsSeedService).run();
  // await app.get(CategorySeedService).run();
  //finish
  await app.close();
};

void runSeed();
