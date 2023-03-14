import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;




  handleTakeOff(){
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if(result){
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight."
      this.takeOffEnabled = false;
    }
  }
  handleLanding(image){
    window.alert("The shuttle is landing. Landing gear engaged");
    this.message="The shuttle has landed";
    this.color = "green";
    this.height = 0;
    image.style.bottom = '0px';
    this.takeOffEnabled = true;
  }
  handleAbort(image){
    let result = window.confirm("Are you sure you want to abort?");
    if(result){
      this.message = "Mission aborted";
      this.color = "red";
      this.height=0;
      image.style.bottom = '0px';
      this.takeOffEnabled = true;
    }
  }
  moveImage(image, direction){
    if(direction == 'right'){
      let movement = parseInt(image.style.left) + 10 + 'px';
      this.edgeCheck(image);
      image.style.left = movement;
      this.width = this.width + 10000;
    }else if(direction == 'left'){
      let movement = parseInt(image.style.left) - 10 + 'px';
      this.edgeCheck(image);
      image.style.left = movement;
      this.width = this.width - 10000;
    }else if(direction == 'up'){
      let movement = parseInt(image.style.bottom) + 10 + 'px';
      this.edgeCheck(image);
      image.style.bottom = movement;
      this.height = this.height + 10000;
    }else if(direction == 'down'){
      let movement = parseInt(image.style.bottom) - 10 + 'px';
      this.edgeCheck(image);
      image.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }
  edgeCheck(image){
    if(parseInt(image.style.left) <0 || parseInt(image.style.left)>32 || parseInt(image.style.bottom) < 0 || parseInt(image.style.bottom) > 32){
      this.color = "orange";
    }else{
      this.color = "blue";
    }
  }
}


