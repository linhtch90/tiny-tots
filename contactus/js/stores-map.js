      // The following example creates complex markers to indicate beaches near
      // Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
      // to the base of the flagpole.
      function initMapst() {
        const mapstories = new google.maps.Map(document.getElementById("stores-map"), {
          zoom: 5.8,
          center: { lat: 15.0105689, lng: 107.1007272 },
          //center: { lat: -33.9, lng: 151.2 },
        });
        setMarkers(mapstories);
      }
      // Data for the markers consisting of a name, a LatLng and a zIndex for the
      // order in which these markers should display on top of each other.
      const beaches = [
        ["Store 3:  52 Nguyễn Khánh Toàn, Quan Hoa, Cầu Giấy, Tp. Hà Nội", 21.0362645, 105.800897, 3],
        ["Store 2:  143 Hoàng Diệu 2, Linh Chiểu, Thủ Đức, Tp. Hồ Chí Minh", 10.8552583, 106.7654855, 2],
        ["Store 1:  28 Núi Thành, Hòa Thuận Đông, Hải Châu, Tp. Đà Nẵng", 16.0538439, 108.2179835, 1],
      ];

      function setMarkers(map) {
        // Adds markers to the map.
        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.
        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.
        const image = {
          url:
            "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32),
        };
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        const shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: "poly",
        };

        for (let i = 0; i < beaches.length; i++) {
          const beach = beaches[i];
          new google.maps.Marker({
            position: { lat: beach[1], lng: beach[2] },
            map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[3],
          });
        }
      }