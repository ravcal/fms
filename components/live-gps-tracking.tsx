// ... inside the LiveGPSTracking component
<TabsContent value="map" className="space-y-6">
  {/* ... Filters are here ... */}

  {/* Interactive Map */}
  <Card>
    <CardHeader>
      <div className="flex justify-between items-center">
        <div>
          <CardTitle>Live Vehicle Map</CardTitle>
          <CardDescription>
            Real-time vehicle positions • Last updated: {lastUpdate.toLocaleTimeString()}
          </CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <Maximize2 className="h-4 w-4 mr-2" />
          Fullscreen
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div className="h-96 bg-gray-100 rounded-lg relative overflow-hidden">
        {/* Map Background Simulation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
          {/* ... SVG grid pattern ... */}
        </div>

        {/* Vehicle Markers are rendered here */}
        {filteredVehicles.map((vehicle, index) => (
          <div
            key={vehicle.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{
              left: `${20 + ((index * 15) % 60)}%`, // Position is simulated
              top: `${20 + ((index * 20) % 60)}%`,  // Position is simulated
            }}
            onClick={() => setSelectedVehicle(vehicle.id)}
          >
            {/* Vehicle Icon */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-110 ${
                // ... logic to set color based on status
              }`}
            >
              <Navigation
                className="h-4 w-4 text-white"
                style={{ transform: `rotate(${vehicle.heading}deg)` }}
              />
            </div>

            {/* Vehicle Info Popup on hover */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* ... popup content ... */}
            </div>
          </div>
        ))}

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
            {/* ... legend content ... */}
        </div>
      </div>
    </CardContent>
  </Card>
</TabsContent>