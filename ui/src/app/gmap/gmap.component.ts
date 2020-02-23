import { Component } from "@angular/core";
import { MouseEvent } from "@agm/core";
import { CommonService } from "../services/common.service";

@Component({
  selector: "gmap",
  templateUrl: "./gmap.component.html",
  styleUrls: ["./gmap.component.css"]
})
export class GmapComponent {
  constructor(private commonSer: CommonService) {}

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log("dragEnd", m, $event);
  }

  markers: marker[] = [
    {
      lat: 51.715248,
      lng: 8.7521302,
      label: "Paderborn",
      draggable: true
    },
    {
      lat: 51.434406,
      lng: 6.762329,
      label: "Duisburg",
      draggable: true
    },
    {
      lat: 51.67638,
      lng: 8.34665,
      label: "Lippstadt",
      draggable: true
    }
  ];

  ngOnInit() {
    this.commonSer.getCountryList().subscribe((res: any) => {
      let countryList = [];
      res.forEach(country => {
        countryList.push({
          lat: country.latitude,
          lng: country.longitude,
          label: country.name,
          draggable: true
        });
      });
      this.markers = countryList;
      console.log("this.markers ----->", this.markers);
    });
  }
}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
