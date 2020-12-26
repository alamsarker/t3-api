.PHONY : start stop

start:
	docker-compose down
	docker-compose up

stop:
	docker-compose down
