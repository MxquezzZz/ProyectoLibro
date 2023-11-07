import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorService } from './services/autor/autor.service';
import { EditorialService } from './services/editorial/editorial.service';
import { CategoriaService } from './services/categioria/categoria.service';
import { LibroService } from './services/libro/libro.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  libroForm: FormGroup;
  libro: any;
  autores: any;
  categorias: any;
  editoriales: any;

  constructor(
    public fb: FormBuilder,
    public autorService: AutorService,
    public editorialService: EditorialService,
    public categoriaService: CategoriaService,
    public libroService: LibroService
    ) { }
  
  ngOnInit(): void {
      
    this.libroForm = this.fb.group({
      id: [''],
      titulo : ['', Validators.required],
      fechalan : ['', Validators.required],
      idioma : ['', Validators.required],
      paginas : ['', Validators.required],
      descripcion : ['', Validators.required],
      portada : ['', Validators.required],
      autor : ['', Validators.required],
      categoria : ['', Validators.required],
      editorial : ['', Validators.required]

    });;

      this.autorService.getAllAutores().subscribe(resp=>{
          this.autores = resp;
          // console.log(resp)
      },
      error=>{console.error(error)}
      ),

      this.categoriaService.getAllCategoria().subscribe(resp =>{
        this.categorias = resp;
        // console.log(resp)
      },
      error=>{console.error(error)}
      ),

      this.editorialService.getAllEditorial().subscribe(resp =>{
        this.editoriales = resp;
        // console.log(resp)
      },
      error=>{console.error(error)}
      ),

      this.libroService.getAllLibro().subscribe(resp=>{
        this.libro = resp;
      },
      error=>{console.error(error)}
      )

   }
   
    guardar() : void {
      this.libroService.saveLibro(this.libroForm.value).subscribe(resp=>{
        this.libroForm.reset();
        this.libro=this.libro.filter((libro: { id: any; })=>resp.id!=libro.id)
        this.libro.push(resp);
      },
      error=>{console.error(error)}                               
      )

    }

    eliminar(libro: any){
      this.libroService.deleteLibro(libro.id).subscribe(resp=>{
        console.log(resp)
        if(resp === true){
          this.libro.pop(libro)
        }
      },
      error=>{console.error(error)}   
      )

    }

    editar(libro: any){
      this.libroForm.setValue({
        id: libro.id,
        titulo : libro.titulo,
        fechalan : libro.fechalan,
        idioma : libro.idioma,
        paginas : libro.paginas,
        descripcion : libro.descripcion,
        portada : libro.portada,
        autor : libro.autor,
        categoria : libro.categoria,
        editorial : libro.editorial
      })

    }



}