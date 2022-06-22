import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'features',component:FeaturesComponent},
  {path:'services',component:ServicesComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'blog',component:BlogPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
