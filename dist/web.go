package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	g := gin.New()
	g.Static("/static", "./static")
	g.Run(":8989")
}
