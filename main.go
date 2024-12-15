package main

import (
	"net/http"
)

func main() {
	// Path to the /dist folder
	distPath := "./dist"

	// Create a file server
	fs := http.FileServer(http.Dir(distPath))

	// Serve the static files
	http.Handle("/", fs)

	// Start the server
	port := ":8080"
	println("Server is running on http://localhost" + port)
	if err := http.ListenAndServe(port, nil); err != nil {
		panic(err)
	}
}
