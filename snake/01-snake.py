import turtle
import time
import random
posponer = 0.1

#Configuracion de la ventana 
#wn sera la abreviatura de window en español ventana

wn = turtle.Screen()
wn.title("play snake")
wn.bgcolor("black")
wn.setup(width=600,height=600)
wn.tracer(0)

# head snake

head=turtle.Turtle()
head.speed(0)
head.shape("square")
head.color("white")
head.penup()
head.goto(0,0)
head.direction = "stop"

# food snake

food=turtle.Turtle()
food.speed(0)
food.shape("circle")
food.color("red")
food.penup()
food.goto(0,100)

#Segmentos o curpo de snake "Se realizara por medio de una lista que inicialmente estara bacia"

segment=[]

#Funciones 

#Definiremos una funcion que conectara nuestra aplicacion con nuestro teclado up.down, right and left

def arriba():
    head.direction = "up"
def abajo():
    head.direction = "down"
def derecha():
    head.direction = "right"
def izquierda():
    head.direction = "left"

def move():
    if head.direction == "up":
        y = head.ycor()
        head.sety(y + 20)
    if head.direction == "down":
        y = head.ycor()
        head.sety(y - 20)
    if head.direction == "right":
        x = head.xcor()
        head.setx(x + 20)
    if head.direction == "left":
        x = head.xcor()
        head.setx(x - 20)

# En esta parte definiremos nuestro Teclado
wn.listen()
wn.onkeypress(arriba, "Up")
wn.onkeypress(abajo, "Down")
wn.onkeypress(derecha, "Right")
wn.onkeypress(izquierda, "Left")

while True:
    wn.update()

    # Colisiones con los bordes
    if head.xcor() > 280 or head.xcor() < -290 or head.ycor() > 290 or head.ycor() < -290:
        
    
    #aqui se definira el comportamiento de la colision snake food
    if head.distance(food) < 20: #Si la distancia es menor a 20 entre snake y food
        x = random.randint(-280, 280)
        y = random.randint(-280, 280)
        food.goto(x,y)
        new_segment=turtle.Turtle()
        new_segment.speed(0)
        new_segment.shape("square")
        new_segment.color("grey")
        new_segment.penup()
        segment.append(new_segment)
    
    # Mover el segmento o cuerpo de snake que se va creando
    total_segment = len(segment)
    
    #se animara el cuerpo forzando que el ultimo creado siga al anterior y asi secuencialmente 
    #hasta llegar a que el 1 siga al 0
    
    for index in range(total_segment -1, 0, -1):
        x = segment[index -1 ].xcor()
        y = segment[index -1 ].ycor()
        segment[index].goto(x,y)
    if total_segment > 0:
        x = head.xcor()
        y = head.ycor()
        segment[0].goto(x,y)





    move()
    time.sleep(posponer)
