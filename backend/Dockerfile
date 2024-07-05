FROM python:3.12-bookworm

ENV PYTHONBUFFERED = 1

WORKDIR /django

COPY requirements.txt requirements.txt 

RUN pip install -r requirements.txt

COPY . .

RUN python manage.py collectstatic --no-input

CMD gunicorn api.wsgi:app --bind 0.0.0.0:8000

EXPOSE 8000