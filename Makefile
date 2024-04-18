build:
	docker compose -f local.yaml up --build  --remove-orphans

up:
	docker compose -f local.yaml up 

down:
	docker compose -f local.yaml down

show-logs-backend:
	docker compose -f local.yaml logs backend
