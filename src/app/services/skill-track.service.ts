import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SkillTrackService {

    constructor(private http: HttpClient) { }

    getSkills():Observable<any> {
    	return this.http.get('http://localhost:8000/skills')
    	.map((response) => response)	      
    	.catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
    }

	addSkill(skill: Skill, trackid: String): Observable<Skill[]> {
	  const apiUrl = 'http://localhost:8000/tracks';
	  const url = `${apiUrl}/${trackid}/skills/${skill.id}`;
	  return this.http.post(url, skill)
	    .map((response) => response)
	    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'}));
	}	

	getSkill(id: String): Observable<any> {
	  return this.http.get('http://localhost:8000/skills/' + id)
	    .map((response) => response['skill'])
        .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));
	}

	updateSkill(skill: Object): Observable<Skill[]> {
	  const apiUrl = 'http://localhost:8000/skills';
	  const url = `${apiUrl}/${skill['id']}`;
	  return this.http.put(url, skill)
	    .map((response) => response)
	    .catch((error: any) => Observable.throw(error.error || {message: 'Server Error'}));
	}

	deleteSkill(trackid: String, skillid: String): Observable<Skill[]> {
	  const apiUrl = 'http://localhost:8000/tracks';
	  const url = `${apiUrl}/${trackid}/skills/${skillid}`;
	  return this.http.delete(url)
	    .map((response) => response)
	    .catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'}));
	}	

	createSkill():Observable<any> {
    	return this.http.get('http://localhost:8000/skills/create')
    	.map((response) => response)
    	.catch((error: any) => Observable.throw(error.json().error || {message: 'Server Error'} ));;
    }
}
