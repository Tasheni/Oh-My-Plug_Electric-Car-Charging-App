import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from "./users/Users.service";
import { ChargersService } from './chargers/chargers.service';
import { UsersController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users/users.schema';
import { Charger, ChargerSchema} from './chargers/chargers.schema'
import { ChargersController } from './chargers/chargers.controller';
import { StatusController } from './status/status.controller';
import { StatusService } from './status/status.service';
import { Status, StatusSchema } from './status/status.schema';


@Module({
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017/electric"), MongooseModule.forFeature([
    {
      name: User.name,
      schema: UserSchema
    },
    {
      name: Charger.name,
      schema: ChargerSchema
    },

    {
      name: Status.name,
      schema: StatusSchema
    }
  ]),

],
  controllers: [AppController, UsersController, ChargersController, StatusController],
  providers: [AppService, UsersService, ChargersService, StatusService],
})
export class AppModule {}
