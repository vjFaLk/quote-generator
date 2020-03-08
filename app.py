import traceback
import uuid
import sys

import pymysql
import redis

import falcon

from platformshconfig import Config


config = Config()

class QuoteResource:
    def on_get(self, req, resp):
        resp.media = get_quote()



def get_quote():
    database_config = config.credentials('database')
    connection = pymysql.connect(
        host=database_config["host"],
        port=database_config["port"],
        user=database_config["username"],
        password=database_config["password"],
        db=database_config["path"],
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor,
    )

    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM quotes ORDER BY RAND() LIMIT 1;")
            return cursor.fetchone()

    finally:
        connection.close()

application = falcon.API()
application.add_route('/api/quote', QuoteResource())