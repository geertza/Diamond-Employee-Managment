INSERT INTO department
  (department)
VALUES
  ('andriods'),
  ('slaves'),
  ('deskjockeys'),
  ('rats');

INSERT INTO role
  (title, salary, department_id)
VALUES
  ('clerks', 10320 , 1),
  ('slave', 0 , 2),
  ('it', 15000, 2),
  ('Accountant', 125000, 3),
  ('Legal', 250000, 4),
  ('soldier', 500, 4);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Richard', 'Rausch', 1, 1),
  ('peter', 'Small', 3, 2),
  ('Mike', 'Hunt', 2, 3),
  ('IAM', 'Gawd', 2, 4),
  ('Sarah', 'Lee', 3, 5),
  ('don', 'parker', 3, 6),
  ('Mel', 'Lowe', 2, 7),
  ('Joe', 'Dee', 4, 8),
  ('major','Pain',5,3);
  
