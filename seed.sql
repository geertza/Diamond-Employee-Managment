INSERT INTO department
  (name)
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
  ('Legal', 250000, 3),
  ('soldier', 500, 4);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Richard', 'Rausch', 1, 1),
  ('peter', 'Small', 3, 1),
  ('Mike', 'Hunt', 2, 1),
  ('IAM', 'God', 2, 2),
  ('Sarah', 'Lee', 3, 2),
  ('don', 'parker', 3, 3),
  ('Mel', 'Loewe', 2, 4),
  ('Joe', 'Dee', 4, 4);
  
