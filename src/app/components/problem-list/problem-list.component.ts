import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from 'app/data-structure/problem';

// const PROBLEMS: Problem[] = [{
//   id: 1,
//   name: "test",
//   desc: "test desc",
//   difficulty: "easy"
// },{
//   id: 2,
//   name: "test2",
//   desc: "test2 desc",
//   difficulty: "hard"
// }]

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problems: Problem[];

  constructor(@Inject('data') private DataService) { }

  ngOnInit() {
    this.getProblems();
  }

  getProblems(): void {
    this.problems = this.DataService.getProblems();
  }
}
