import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pathcomponents
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MySiteComponent } from './my-site/my-site.component';

import { TagCloudComponent} from './tag-cloud/tag-cloud.component';
import { SearchResultComponent } from './search-result/search-result.component';

//Kristian
import { FetchDataComponent } from './fetch-data/fetch-data.component';
//import { SearchComponent } from './fetch-data/search.component';



const appRoutes: Routes = [
    // Add main routes here
    {
        path: '',
        component: HomeComponent,

    },
    {
        path: 'logIn',
        component: LogInComponent,
    },
    {
        path: 'newUser',
        component: NewUserComponent,
    },
    {
        path: 'mySite',
        component: MySiteComponent,
    },
    {
        path:"cloud",
        component: TagCloudComponent,
    },
    {
        path:"data",
        component: FetchDataComponent,
    },
    {
        path:"search",
        component: SearchResultComponent,
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
