#Урок 3.Ввод-вывод и базовые переменные
#Задание 1
print("Введите вид питомца:")
pet = input()
print("Введите возраст питомца:")
age = input()
print("Введите имя питомца:")
name = input()
print("Это", pet, "по кличке:", name + ".", "Возраст:", age + ".")


#Задание 2
print("Введите по порядку этапы развития человечества.")
print("Первый этап:")
ard = input()
print("Второй этап:")
aus = input()
print("Третий этап:")
par = input()
print("Четвертый этап:")
ken = input()
print("Пятый этап:")
hom = input()

print("Ваш ответ:")
print(ard, aus, par, ken, hom, sep="=>")

print("Правильный ответ:")
print("Ardipithecus => Australopithecus => Paranthropus => Kenyanthropus => Homo")