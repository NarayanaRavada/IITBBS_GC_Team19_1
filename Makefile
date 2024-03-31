start:
	docker compose up -d

start-clean:
	docker compose up --force-recreate --build app
