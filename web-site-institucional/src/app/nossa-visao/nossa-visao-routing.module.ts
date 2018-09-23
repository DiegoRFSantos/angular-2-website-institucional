import { NgModule } from "@angular/core";
import { RouterModule } from "@Angular/router";
import { NossaVisaoComponent } from "./nossa-visao.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'nossa-visao', component:    NossaVisaoComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class NossaVisaoRoutingModule{

}