from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer

PORT = 8000

httpd = TCPServer(("", PORT), SimpleHTTPRequestHandler)

print("serving at port {:d}".format(PORT))
httpd.serve_forever()