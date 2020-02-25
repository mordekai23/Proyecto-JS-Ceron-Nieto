#include <Boards.h>
#include <Firmata.h>
#include <FirmataConstants.h>
#include <FirmataDefines.h>
#include <FirmataMarshaller.h>
#include <FirmataParser.h>


const int PIR = 7;
int pirLectura = 0;

void setup(){
  pinMode(PIR, INPUT);
  Serial.begin(9600);
  //dht.begin();
}

void loop(){
  pirLectura = digitalRead(PIR);
  if(pirLectura == HIGH){
    Serial.println("Movimiento");
    delay(1200);
  }
  else{
    Serial.println("Nadaaaaa");
    delay(1200);
  }

}
