package main

import "github.com/NguyenHoaiPhuong/warehouse/server/app"

func main() {
	a := new(app.App)
	a.Init()
	a.Run()
}
