# MediSense

MediSense is a <strong>simple and easy to use</strong>WebApp.We help <strong>patients</strong> from around the world to share their ,pre medical records efficiently, reliably and securely, to the doctor he wants to consult. We use <strong>Blockchain</strong> to securely transfer patient data to the doctor the patient's wishes to share. The patient also has option to revoke the access to his Pre-Medical recoed. <br>

## Work Flow


### Patient End User

- Each patient registers through blockchain which asks for name, Age , Previous medical record etc.
- Patient gets verified by admin (say a hospital).
- If verified he can login into his portal and can see his details and the list of doctors(he can further see more details of doctor).
- Finally he can send his Previous Medical reports which is secured by blockchain network(in our case rinkeby blockchain test network).
- That reports will only be visible to the doctor patient wants, the patient can also revoke the access of doctor to view his medical Records.

### Doctor End User

- Each doctor registers through blockchain which asks for Name, Age , Previous experience etc.
- Doctor gets verified by admin (say a hospital). Admin can also add additional details about the doctor.
- If verified the doctor can login into his portal to view his detail.
- If the doctor is granted access to a medical record by a patient(which is transaction of patient's pre-medical record via blockchain), only then he can view the patient's record.
- Finally the doctor can add comments(or add record) which will be updated in the patients's record and when next time the patient grants the access to any other doctor, he can see the record added by all previous doctors.

### Admin End User

- Verify patient and doctors
- can update profile information of patient and doctors
- But even admin cannot see Medical records of patient he can only grant access to doctors and patient to form a block 


### Prerequisites

What things you need to install the software and how to install them

```
Python 3.6
Node.js
```

### Installing

Dependencies needed

```
- Python 3.6 runtime
- Django 2.0.5
- Node.js
```

- Make database migrations
    ```
    python3 manage.py makemigrations student
    python3 manage.py migrate student
    python3 manage.py makemigrations
    python3 manage.py migrate
    ```
- Create a superuser
    ```
    python manage.py createsuperuser
    ```
- Run development server on localhost
    ```
    python manage.py runserver
    ```


## Authors

* **Jash Patel** (https://github.com/Jashpatel1)
* **Tanuj agarwal** (https://github.com/Tanuj22)
* **Anmol Gupta** (https://github.com/anmolcool007)

## Motivation

* For 36hr software development hackathon held as an event in prometeo (Annual Technical Fest of IIT-Jodhpur).
