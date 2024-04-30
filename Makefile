build:
	docker compose -f local.yaml up  -d  --build  --remove-orphans 

up:
	docker compose -f local.yaml up -d --remove-orphans 

down:
	docker compose -f local.yaml down

show-logs-backend:
	docker compose -f local.yaml logs backend

show-logs-frontend:
	docker compose -f local.yaml logs frontend

