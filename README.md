1. Levantar la base de datos
 ```
docker compose up -d
 ```
2. renombrar el .env.template a .env

3. reemplazar las variables de entorno

4. ejecutar  ``` npm install ```
5. ejecutar  ``` npm run dev ```
6. ejecutar estos comandos de prisma
```
npx prisma migrate dev
npx prisma generate
```

6. ejecutar comando de seed para [crear base de datos local](http://localhost:3000/api/seed)


#Prisma commands
 ```
npx prisma init
npx prisma migrate dev
npx prisma generate
 ```