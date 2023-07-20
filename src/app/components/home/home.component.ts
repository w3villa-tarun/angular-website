import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  newsData: any[] = [];

  constructor(private newsService: NewsService) { 
    
  }

  ngOnInit(): void {
    this.getTopHeadlines();
  }
  getTopHeadlines() {
    this.newsService.getTopHeadlines().subscribe(
      (data) => {
        this.newsData = data.articles;
        console.log(this.newsData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
